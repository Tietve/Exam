using Comic.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Thêm dịch vụ MVC và DbContext
builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Cấu hình pipeline middleware
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles(); // Để dùng CSS, JS, ảnh

app.UseRouting();

app.UseAuthorization();

// Cấu hình route mặc định: vào Book/Index khi chạy
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Book}/{action=Index}/{id?}");

// THÊM DÒNG NÀY để chạy và hiện ra địa chỉ
app.Run();
