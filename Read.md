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

- Angular is a frontend framework which you can use to build web applications and you can build single page applications.
- SPA (Single Page Application) gets downloaded by the browser once you visit the page and then changes are handled locally instead of well downloading the entire web application or website over and over again only because you are clicking a button or linke for example.
- In Angular, you create a single page application and when you host it and you visit that  application or any other user visits that application or website, then the browser downloads the entire application and handles the changes locally. So this really speeds up the overall user experience.

## Command 
- PS D:\CodeDotnet\BlazorMovieWebApp\Angular> Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
- PS D:\CodeDotnet\BlazorMovieWebApp\Angular> npm install -g @angular/cli

## ✅ **1. What is CI/CD (Continuous Integration / Continuous Deployment)?**

### 🔹 CI (Continuous Integration)

CI is the **process of automatically building and testing code every time** a developer pushes changes to the code repository.

**Goals:**

* Detect errors early
* Keep the codebase healthy
* Ensure everyone is working with the latest tested code

**Example CI Steps:**

1. Developer pushes code to GitHub
2. CI pipeline runs:

   * Restore NuGet packages
   * Build the .NET solution
   * Run unit tests
   * Generate test results

**Tools:**

* GitHub Actions
* Azure DevOps
* Jenkins
* GitLab CI

---

### 🔹 CD (Continuous Delivery/Deployment)

* **Continuous Delivery**: After CI, the app is packaged and made ready for deployment (but still requires manual approval).
* **Continuous Deployment**: The app is **automatically deployed** to production after tests pass (no manual step).

**Typical CD Steps:**

1. CI finishes
2. Build is packaged (e.g., `.dll` + `.json` for .NET)
3. Docker image is created (optional)
4. Deployment to:

   * Test/QA environment
   * Staging/Production
   * Azure App Service / AWS / Kubernetes

---

### 🛠 Sample CI/CD Workflow for ASP.NET Core:

```yaml
# GitHub Actions CI/CD example
name: Build and Deploy

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Setup .NET
      uses: actions/setup-dotnet@v3
      with:
        dotnet-version: '8.x'
    - name: Build
      run: dotnet build MyApp.sln
    - name: Test
      run: dotnet test MyApp.Tests/MyApp.Tests.csproj
    - name: Publish
      run: dotnet publish -c Release -o publish/
```

---

## ✅ **2. What is Docker?**

### 🔹 Definition:

Docker is a **containerization platform** that allows you to **package your application and its dependencies into a single unit** called a **container**.

> Think of Docker containers as lightweight, portable virtual machines — but faster and easier to manage.

---

### 🔹 Why Use Docker?

* Same behavior across dev, test, and production
* Fast deployments
* Easy scaling and isolation
* Works well with microservices and CI/CD

---

### 🔹 Basic Docker Concepts:

* **Dockerfile**: Script that tells Docker how to build your container.
* **Image**: Blueprint of your application (built from Dockerfile).
* **Container**: Running instance of an image.

---

### 🛠 Sample Dockerfile for ASP.NET Core App

```Dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
RUN dotnet restore
RUN dotnet build -c Release
RUN dotnet publish -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "MyApp.dll"]
```

### Run your container:

```bash
docker build -t myapp .
docker run -d -p 8080:80 myapp
```

---

## 🔁 CI/CD + Docker Workflow

1. Code is pushed → triggers GitHub Action
2. Tests run → Docker image is built
3. Image is pushed to Docker Hub / Azure Container Registry
4. App is deployed to Azure App Service / Kubernetes

---

## Summary Table

| Concept    | Purpose                                   |
| ---------- | ----------------------------------------- |
| CI         | Automatically build & test code           |
| CD         | Automatically deploy app after CI         |
| Docker     | Package app + dependencies into container |
| Dockerfile | Instructions to build Docker image        |
| Container  | Lightweight, portable app runtime         |

## Components in Angular
- Components are the foundational building blocks for any Angular application. Each component has three parts:
  - TypeScript class
  - HTML Template
  - CSS Style

- In Angular, the component's logic and behavior are defined in the component's TypeScript class.

## Property Binding in Angular
- Property binding in Angular enables you to set values for properties of HTML elements, Angular components and more.
- Use property binding to dynamically set values for properties and attributes. You can do things such as toggle button features, set image paths programmatically, and share values between components.

## Event Handling
- Event handling enables interactive features on web apps. It gives you the ability as a developer to respond to user actions like button presses, form submissions and more.
- In Angular you bind to events with the parentheses syntax ().

## Component input properties
- Sometimes app development requires you to send data into a component. This data can be used to customize a component or perhaps send information from a parent component to a child component.
- Angular uses a concept called input. This is similar to props in other frameworks. To create an input property, use the input() function.

## Component output properties
- When working with components it may be required to notify other components that something has happened. Perhaps a button has been clicked, an item has been added/removed from a list or some other important update has occurred. In this scenario components need to communicate with parent components.
- Angular uses the output() function to enable this type of behavior.

## Deferrable Views
- Sometimes in app development, you end up with a lot of components that you need to reference in your app, but some of those don't need to be loaded right away for various reasons.
- Maybe they are below the visible fold or are heavy components that aren't interacted with until later. In that case, we can load some of those resources later with deferrable views.

