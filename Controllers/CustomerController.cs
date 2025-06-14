using Microsoft.AspNetCore.Mvc;
using Comic.Models;
using Comic.Data;
using System;

namespace Comic.Controllers
{
    public class CustomerController : Controller
    {
        private readonly ApplicationDbContext _context;

        public CustomerController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: /Customer/Register
        public IActionResult Register()
        {
            return View();
        }

        // POST: /Customer/Register
        [HttpPost]
        public IActionResult Register(Customer customer)
        {
            if (ModelState.IsValid)
            {
                customer.RegisterDate = DateTime.Now;
                _context.Customers.Add(customer);
                _context.SaveChanges();
                return RedirectToAction("Index", "Book");
            }
            return View(customer);
        }
    }
}
