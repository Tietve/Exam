namespace Comic.Models;
public class RentalDetail
{
    public int Id { get; set; }
    public int RentalId { get; set; }
    public int BookId { get; set; }
    public int Quantity { get; set; }

    public Book Book { get; set; }
    public Rental Rental { get; set; }
}
