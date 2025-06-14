namespace Comic.Models;
public class Rental
{
    public int Id { get; set; }
    public int CustomerId { get; set; }
    public DateTime RentalDate { get; set; }
    public DateTime ReturnDate { get; set; }

    public Customer Customer { get; set; }
    public List<RentalDetail> RentalDetails { get; set; }
}
