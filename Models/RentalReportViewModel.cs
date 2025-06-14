namespace Comic.Models
{
    public class RentalReportViewModel
    {
        public string BookTitle { get; set; }
        public DateTime RentalDate { get; set; }
        public DateTime ReturnDate { get; set; }
        public string CustomerName { get; set; }
        public int Quantity { get; set; }
    }
}
