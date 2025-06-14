using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Comic.Data;
using Comic.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Comic.Controllers
{
    public class RentalController : Controller
    {
        private readonly ApplicationDbContext _context;

        public RentalController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Rental/Create
        public IActionResult Create()
        {
            ViewBag.Customers = new SelectList(_context.Customers, "Id", "Fullname");
            ViewBag.Books = new SelectList(_context.Books, "Id", "Title");
            return View();
        }

        public IActionResult Report(DateTime? start, DateTime? end)
{
    ViewBag.Start = start?.ToString("yyyy-MM-dd");
    ViewBag.End = end?.ToString("yyyy-MM-dd");

    if (start == null || end == null)
    {
        return View(new List<RentalReportViewModel>());
    }

    var result = (from rental in _context.Rentals
                  join detail in _context.RentalDetails on rental.Id equals detail.RentalId
                  join book in _context.Books on detail.BookId equals book.Id
                  join customer in _context.Customers on rental.CustomerId equals customer.Id
                  where rental.RentalDate >= start && rental.RentalDate <= end
                  select new RentalReportViewModel
                  {
                      BookTitle = book.Title,
                      RentalDate = rental.RentalDate,
                      ReturnDate = rental.ReturnDate,
                      CustomerName = customer.Fullname,
                      Quantity = detail.Quantity
                  }).ToList();

    return View(result);
}

        [HttpPost]
        public IActionResult Create(int CustomerId, DateTime RentalDate, DateTime ReturnDate, int BookId, int Quantity)
        {
            var rental = new Rental
            {
                CustomerId = CustomerId,
                RentalDate = RentalDate,
                ReturnDate = ReturnDate,
            };

            _context.Rentals.Add(rental);
            _context.SaveChanges();

            var detail = new RentalDetail
            {
                RentalId = rental.Id,
                BookId = BookId,
                Quantity = Quantity
            };

            _context.RentalDetails.Add(detail);
            _context.SaveChanges();

            return RedirectToAction("Index", "Book");
        }
    }
}
