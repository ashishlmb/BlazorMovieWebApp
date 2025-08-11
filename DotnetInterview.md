Preparing for a mid-level .NET developer interview in Kathmandu (or generally anywhere) with 2 years of experience requires a good grasp of both core and advanced .NET concepts, practical development skills, and an understanding of software design and project workflows.

Here’s a structured guide to **what he should prepare for** and **what questions he might face**.

---

## 🔧 Key Areas to Prepare For

### 1. **.NET and C# Fundamentals**

* Object-Oriented Programming (OOP) principles
* Value types vs Reference types
* Garbage collection
* Delegates, events, and lambdas
* async/await and multithreading
* LINQ (Language Integrated Query)
* Collections and Generics

### 2. **ASP.NET Core**

* MVC and Razor Pages
* Middleware and pipeline
* Dependency Injection
* Configuration and appsettings.json
* Model binding and validation
* Filters (Action, Authorization, Exception)

### 3. **Entity Framework Core**

* Code First vs Database First
* Migrations
* LINQ queries
* Relationships (One-to-Many, Many-to-Many)
* Tracking vs No Tracking
* Async data access

### 4. **RESTful API Development**

* Routing, controllers, and attributes
* Status codes
* Versioning
* Authentication and Authorization (JWT, Identity)
* Swagger / OpenAPI documentation

### 5. **Database Knowledge**

* SQL Server basics (joins, stored procedures, indexes)
* Writing optimized queries
* Transactions and error handling

### 6. **Software Design & Patterns**

* SOLID principles
* Repository pattern
* Unit of Work
* Dependency Injection
* Clean Architecture (optional but a plus)

### 7. **Testing**

* Unit testing with xUnit / NUnit / MSTest
* Mocking frameworks like Moq
* Integration testing basics

### 8. **Version Control (Git)**

* Branching, Merging, Pull Requests
* GitHub / GitLab / Azure DevOps basics

### 9. **Agile & DevOps Concepts**

* Scrum process (daily standup, sprint, backlog)
* CI/CD basics
* Working with Azure DevOps or GitHub Actions

---

## 💬 Common Interview Questions

### **Technical Questions**

* What is the difference between `IEnumerable` and `IQueryable`?
* How does dependency injection work in ASP.NET Core?
* What is the difference between `Task`, `async`, and `await`?
* Can you explain what middleware is in ASP.NET Core?
* What are the differences between .NET Framework and .NET Core?
* How does Entity Framework handle relationships between entities?
* How do you secure your API? (JWT, HTTPS, CORS, etc.)
* What’s the role of AutoMapper and when would you use it?

### **Coding Questions**

* Write a function to reverse a string in C#.
* Implement a basic CRUD operation using EF Core.
* Write a LINQ query to group and filter data.
* Create an endpoint that returns paginated results.

### **Scenario-Based Questions**

* How would you optimize a slow API endpoint?
* If you receive a `NullReferenceException`, how would you debug it?
* How would you handle error logging in a production application?

### **Soft Skills/Behavioral**

* Describe a project you’ve worked on recently.
* How do you handle deadlines and project pressure?
* Have you worked with teams or clients directly?
* What’s your experience with Git or version control?
* Have you contributed to code reviews?

---

## 📚 Suggested Resources

* **Books:**

  * *C# in Depth* by Jon Skeet
  * *Pro ASP.NET Core MVC* by Adam Freeman

* **Online:**

  * Microsoft Learn (.NET): [https://learn.microsoft.com/en-us/dotnet/](https://learn.microsoft.com/en-us/dotnet/)
  * YouTube channels: IAmTimCorey, Kudvenkat
  * Pluralsight or Udemy (for hands-on ASP.NET Core projects)

---

## 🎯 Final Tips

* Practice coding on platforms like LeetCode (easy/medium level)
* Build a small project or showcase existing work (e.g., portfolio site, GitHub repo)
* Be ready to **explain why** and **how** you did something — not just what
* Prepare a few intelligent questions for the interviewer

Would you like a mock interview question set or a cheat sheet for last-minute revision?

Great questions — these are commonly asked in interviews for .NET developer roles and are important for both technical depth and architectural understanding. Here's a detailed breakdown of each:

---

## ✅ **1. How does Dependency Injection (DI) work in ASP.NET Core?**

### 🔹 What is Dependency Injection?

DI is a **design pattern** that helps to **decouple classes** by injecting their dependencies (objects/services they need) from the outside rather than the class creating them itself.

### 🔹 How it works in ASP.NET Core:

* ASP.NET Core has **built-in support** for DI.
* Services are registered in `Program.cs` (or `Startup.cs` in older versions) using:

  ```csharp
  builder.Services.AddTransient<IMyService, MyService>();
  builder.Services.AddScoped<IMyService, MyService>();
  builder.Services.AddSingleton<IMyService, MyService>();
  ```

### 🔹 Lifetime Types:

* `Transient`: New instance every time
* `Scoped`: One instance per HTTP request
* `Singleton`: One instance for the whole application

### 🔹 Usage:

Inject via **constructor injection**:

```csharp
public class MyController : ControllerBase
{
    private readonly IMyService _service;

    public MyController(IMyService service)
    {
        _service = service;
    }
}
```

---

## ✅ **2. What is the difference between `Task`, `async`, and `await`?**

### 🔹 `Task`:

* Represents an **asynchronous operation**.
* Used to run methods that return in the future.

```csharp
public Task<string> GetDataAsync()
```

### 🔹 `async`:

* Marks a method as asynchronous.
* It **enables the use of `await`** inside the method.

### 🔹 `await`:

* Tells the method to **wait** asynchronously for the task to complete before continuing.

```csharp
public async Task<string> GetDataAsync()
{
    var result = await httpClient.GetStringAsync("https://api.com");
    return result;
}
```

### 🔹 Summary:

| Keyword | Purpose                      |
| ------- | ---------------------------- |
| `Task`  | Represents the operation     |
| `async` | Enables use of `await`       |
| `await` | Waits for a task to complete |

---

## ✅ **3. How does Entity Framework handle relationships between entities?**

Entity Framework (EF Core) uses **navigation properties** and **foreign keys** to manage relationships.

### 🔹 Types of Relationships:

1. **One-to-Many**

```csharp
public class Blog
{
    public int Id { get; set; }
    public List<Post> Posts { get; set; }
}

public class Post
{
    public int Id { get; set; }
    public int BlogId { get; set; }
    public Blog Blog { get; set; }
}
```

2. **One-to-One**

```csharp
public class User
{
    public int Id { get; set; }
    public UserProfile Profile { get; set; }
}

public class UserProfile
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public User User { get; set; }
}
```

3. **Many-to-Many** (EF Core 5+)

```csharp
public class Student
{
    public int Id { get; set; }
    public List<Course> Courses { get; set; }
}

public class Course
{
    public int Id { get; set; }
    public List<Student> Students { get; set; }
}
```

* EF handles foreign keys and creates join tables when needed.
* You can configure relationships using Fluent API (`OnModelCreating`).

---

## ✅ **4. How do you secure your API? (JWT, HTTPS, CORS, etc.)**

### 🔹 JWT (JSON Web Token)

* Used for stateless **authentication**.

* On login, client gets a JWT token.

* Client includes token in `Authorization` header for subsequent API requests:

  ```
  Authorization: Bearer <token>
  ```

* In `Program.cs`:

  ```csharp
  builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
      .AddJwtBearer(options => {
          options.TokenValidationParameters = new TokenValidationParameters
          {
              ValidateIssuer = true,
              ValidateAudience = true,
              // ... other settings
          };
      });
  ```

### 🔹 HTTPS

* Enforce HTTPS to secure data in transit:

```csharp
app.UseHttpsRedirection();
```

### 🔹 CORS (Cross-Origin Resource Sharing)

* Controls which origins can access your API.

```csharp
builder.Services.AddCors(options => {
    options.AddPolicy("AllowMyApp",
        builder => builder.WithOrigins("https://myfrontend.com")
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});
app.UseCors("AllowMyApp");
```

### 🔹 Other Best Practices

* Input validation
* Role-based or policy-based authorization
* Rate limiting (e.g., with `AspNetCoreRateLimit`)
* Logging and exception handling

---

## ✅ **5. What is Repository Pattern?**

### 🔹 Purpose:

The **Repository Pattern** abstracts data access logic, making your application more **modular**, **testable**, and **maintainable**.

### 🔹 Example:

**Interface:**

```csharp
public interface IProductRepository
{
    Task<Product> GetByIdAsync(int id);
    Task<List<Product>> GetAllAsync();
    void Add(Product product);
    void Delete(int id);
}
```

**Implementation:**

```csharp
public class ProductRepository : IProductRepository
{
    private readonly AppDbContext _context;

    public ProductRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<Product> GetByIdAsync(int id) =>
        await _context.Products.FindAsync(id);

    public async Task<List<Product>> GetAllAsync() =>
        await _context.Products.ToListAsync();

    public void Add(Product product) =>
        _context.Products.Add(product);

    public void Delete(int id)
    {
        var product = _context.Products.Find(id);
        if (product != null) _context.Products.Remove(product);
    }
}
```

---

## ✅ **6. What are Collections and Generics?**

### 🔹 Collections

Used to **store and manage groups of objects**.
Examples:

* `List<T>` – ordered, resizable list
* `Dictionary<TKey, TValue>` – key-value pair
* `HashSet<T>` – unordered, unique elements

```csharp
List<string> names = new List<string> { "Ram", "Shyam" };
Dictionary<int, string> map = new Dictionary<int, string> { {1, "One"} };
```

### 🔹 Generics

Allows you to **write type-safe and reusable code** without specifying exact data types.

```csharp
public class Box<T>
{
    public T Value { get; set; }
}
```

Usage:

```csharp
Box<int> intBox = new Box<int> { Value = 10 };
Box<string> strBox = new Box<string> { Value = "Hello" };
```

---

Would you like all these compiled as a PDF or doc for offline review or mock interview practice?

To generate a PDF using Python, you'll need to log in to ChatGPT to run Python here — but no worries! You can also copy and run the code below on your local machine.

### 🐍 Python Code to Generate the PDF:

```python
from fpdf import FPDF

# Create a PDF document
pdf = FPDF()
pdf.add_page()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.set_font("Arial", size=12)

# Content to include
content = """
.NET Mid-Level Interview Prep (2 Years Experience)

1. How does Dependency Injection (DI) work in ASP.NET Core?
------------------------------------------------------------
- DI is a design pattern to decouple dependencies.
- ASP.NET Core has built-in DI using IServiceCollection.
- Services are registered in Program.cs or Startup.cs:
    - AddTransient: new instance every time
    - AddScoped: per request
    - AddSingleton: one instance for the lifetime
- Inject using constructor injection.

2. What is the difference between Task, async, and await?
------------------------------------------------------------
- Task: Represents an async operation.
- async: Marks a method to support async calls.
- await: Waits for a Task to complete without blocking.
- They work together to write non-blocking code.

3. How does Entity Framework handle relationships?
------------------------------------------------------------
- EF Core manages One-to-Many, One-to-One, Many-to-Many.
- Use navigation properties and foreign keys.
- Fluent API can configure relationships.
- EF creates join tables where needed.

4. How do you secure your API?
------------------------------------------------------------
- JWT: Token-based authentication.
- HTTPS: Ensures secure transmission.
- CORS: Controls cross-origin requests.
- Additional: Input validation, rate limiting, role-based access.

5. What is the Repository Pattern?
------------------------------------------------------------
- Abstracts data access logic.
- Makes code testable and maintainable.
- Interfaces define contract, classes implement logic.
- Often used with Unit of Work.

6. What are Collections and Generics?
------------------------------------------------------------
Collections:
- List<T>, Dictionary<TKey, TValue>, HashSet<T>
Generics:
- Enable reusable and type-safe code.
- Example: Box<T> to hold any type.
"""

# Split and write each line to PDF
for line in content.strip().split('\n'):
    pdf.multi_cell(0, 10, line)

# Save PDF to file
pdf.output("DotNet_Interview_Prep.pdf")
```

### 📝 Instructions:

1. Make sure you have Python installed.
2. Install the required library: `pip install fpdf`
3. Run the script — it will create a file named `DotNet_Interview_Prep.pdf`.

Would you like this content formatted into a downloadable Word file or another format instead?
