# C# Snippets for Zed

A collection of C# snippets for the Zed editor.

## General

| Prefix          | Description                           |
| --------------- | ------------------------------------- |
| `class`         | Create a new class                    |
| `record`        | Creates a C# record declaration.      |
| `interface`     | Create a new interface                |
| `method`        | Create a method                       |
| `method_async`  | Create an async method                |
| `imethod`       | Create an interface method            |
| `imethod_async` | Create an interface async method      |
| `ctor`          | Create a constructor                  |
| `prop`          | Create an auto-property               |
| `propfull`      | Create a property with backing field  |
| `propread`      | Create a read-only auto-property      |
| `propprivate`   | Create a property with private setter |
| `for`           | Create a for loop                     |
| `foreach`       | Create a foreach loop                 |
| `while`         | Create a while loop                   |
| `dowhile`       | Create a do-while loop                |
| `if`            | Create an if statement                |
| `elseif`        | Create an else-if statement           |
| `ifelse`        | Create an if-else statement           |
| `switch`        | Create a switch statement             |
| `try`           | Create a try-catch block              |
| `tryf`          | Create a try-catch-finally block      |
| `using`         | Create a using statement              |
| `namespace`     | Create a namespace                    |
| `enum`          | Create an enum                        |
| `struct`        | Create a struct                       |
| `static`        | Create a static class                 |
| `abstract`      | Create an abstract class              |
| `cw`            | Console.WriteLine                     |
| `throw`         | Throw an exception                    |
| `ternary`       | Ternary conditional operator          |

## Boilerplate

| Prefix             | Description                              |
| ------------------ | ---------------------------------------- |
| `bp_class`         | Boilerplate for a new C# class           |
| `bp_interface`     | Boilerplate for a new C# interface       |
| `bp_struct`        | Boilerplate for a new C# struct          |
| `bp_enum`          | Boilerplate for a new C# enum            |
| `bp_apicontroller` | Boilerplate for a new C# API Controller  |
| `bp_controller`    | Boilerplate for a new C# MVC Controller  |
| `bp_razorpage`     | Boilerplate for a new Razor Page         |
| `bp_pagemodel`     | Boilerplate for a new C# Razor PageModel |
| `bp_mstest`        | Boilerplate for a new MSTest class       |
| `bp_nunit`         | Boilerplate for a new NUnit class        |
| `bp_xunit`         | Boilerplate for a new xUnit class        |

## Web / ASP.NET Core

| Prefix         | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| `httpget`      | Creates an HTTP GET action method.                            |
| `httppost`     | Creates an HTTP POST action method.                           |
| `httpput`      | Creates an HTTP PUT action method.                            |
| `httpdelete`   | Creates an HTTP DELETE action method.                         |
| `ctordepi`     | Creates a constructor with dependency injection.              |
| `mapget`       | Creates a minimal API GET endpoint in Program.cs.             |
| `mappost`      | Creates a minimal API POST endpoint.                          |
| `mapput`       | Creates a minimal API PUT endpoint.                           |
| `mapdelete`    | Creates a minimal API DELETE endpoint.                        |
| `mapgetdi`     | Creates a minimal API GET endpoint with dependency injection. |
| `addscoped`    | Registers a scoped service in Program.cs.                     |
| `addsingleton` | Registers a singleton service in Program.cs.                  |
| `addtransient` | Registers a transient service in Program.cs.                  |

## CQRS

| Prefix                   | Description                                      |
| ------------------------ | ------------------------------------------------ |
| `cqrs_command`           | Creates a CQRS command with MediatR IRequest     |
| `cqrs_handler`           | Creates a CQRS command handler with MediatR      |
| `cqrs_query`             | Creates a CQRS query with MediatR IRequest       |
| `cqrs_query_handler`     | Creates a CQRS query handler with MediatR        |
| `cqrs_command_validator` | Creates a FluentValidation validator for command |

## Testing

| Prefix    | Description                                   |
| --------- | --------------------------------------------- |
| `xclass`  | Basic xUnit test class with constructor setup |
| `fact`    | xUnit [Fact] test method with AAA pattern     |
| `facta`   | xUnit async [Fact] test method                |
| `theory`  | xUnit [Theory] with InlineData                |
| `nclass`  | NUnit test class with SetUp                   |
| `ntest`   | NUnit [Test] method with AAA pattern          |
| `ncase`   | NUnit [TestCase] method                       |
| `msclass` | MSTest class with TestInitialize              |
| `mstest`  | MSTest [TestMethod] with AAA pattern          |
| `mock`    | Creates a new Moq instance                    |
| `msetup`  | Configures a Mock to return a value           |
| `msetupa` | Configures a Mock to return an async value    |
| `mverify` | Verifies a method was called on the Mock      |
