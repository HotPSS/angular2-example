using Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.MockData
{
    public class MockedEmployee
    {
        private static List<EmployeeModel> _employeeList;

        static MockedEmployee()
        {
            _employeeList = new List<EmployeeModel>
            {
                new EmployeeModel()
                {
                    Id = 1,
                    Name = "Aaron 2Moore",
                    Email = "Heath44@hotmail.com",
                    JobTitle = "Regional Configuration Producer",
                    Active = true,
                    PhoneNumber = "611-898-6201",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 2,
                    Name = "Yvonne Conroy",
                    Email = "Gideon9@yahoo.com",
                    JobTitle = "Global Mobility Orchestrator",
                    Active = false,
                    PhoneNumber = "115-850-0969",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 3,
                    Name = "Laron Padberg",
                    Email = "Laney_Huels@hotmail.com",
                    JobTitle = "Senior Directives Supervisor",
                    Active = false,
                    PhoneNumber = "632-654-3034",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 4,
                    Name = "Dr. Maryam Spinka",
                    Email = "Aletha.Labadie@hotmail.com",
                    JobTitle = "Dynamic Mobility Associate",
                    Active = true,
                    PhoneNumber = "547-345-0067",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 5,
                    Name = "Kiley Baumbach",
                    Email = "Rogelio24@hotmail.com",
                    JobTitle = "Principal Metrics Orchestrator",
                    Active = true,
                    PhoneNumber = "958-524-5164",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 6,
                    Name = "Hollis MacGyver",
                    Email = "Yazmin.Heidenreich97@gmail.com",
                    JobTitle = "jobTitle: 'Direct Markets Assistant",
                    Active = true,
                    PhoneNumber = "603-607-3241",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 7,
                    Name = "Axel McLaughlin",
                    Email = "Deon_Heaney@gmail.com",
                    JobTitle = "Forward Mobility Architect",
                    Active = false,
                    PhoneNumber = "983-639-0705",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 8,
                    Name = "Ricardo Botsford",
                    Email = "Melisa73@yahoo.com",
                    JobTitle = "Direct Quality Consultant",
                    Active = true,
                    PhoneNumber = "408-082-9480",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 9,
                    Name = "Corbin Funk Mrs",
                    Email = "Marjory.Morissette51@gmail.com",
                    JobTitle = "Human Configuration Manager",
                    Active = true,
                    PhoneNumber = "386-937-8683",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 10,
                    Name = "Rosalind Paucek",
                    Email = "Ivy_Stanton@gmail.com",
                    JobTitle = "Future Creative Supervisor",
                    Active = true,
                    PhoneNumber = "977-661-7403",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 11,
                    Name = "Henderson Moore",
                    Email = "Randi_Corkery@hotmail.com",
                    JobTitle = "Internal Accountability Director",
                    Active = true,
                    PhoneNumber = "078-101-6377",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 12,
                    Name = "Kelli Schoen",
                    Email = "Reva.Kiehn54@yahoo.com",
                    JobTitle = "National Accountability Architect",
                    Active = false,
                    PhoneNumber = "654-591-6561",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 13,
                    Name = "Kenna Fritsch",
                    Email = "Wilburn2@gmail.com",
                    JobTitle = "Legacy Response Administrator",
                    Active = true,
                    PhoneNumber = "790-480-2859",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 14,
                    Name = "Judge Marquardt",
                    Email = "Letha_Champlin69@hotmail.com",
                    JobTitle = "Human Program Specialist",
                    Active = true,
                    PhoneNumber = "100-494-1787",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 15,
                    Name = "Kurtis Hane",
                    Email = "Mona.Gaylord47@yahoo.com",
                    JobTitle = "International Optimization Director",
                    Active = false,
                    PhoneNumber = "008-800-2959",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 16,
                    Name = "Nicolette Lind",
                    Email = "Thurman30@yahoo.com",
                    JobTitle = "Legacy Marketing Facilitator",
                    Active = true,
                    PhoneNumber = "007-908-2460",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 17,
                    Name = "Idella Green",
                    Email = "Fernando_Ward@yahoo.com",
                    JobTitle = "Dynamic Division Orchestrator",
                    Active = false,
                    PhoneNumber = "147-865-1578",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 18,
                    Name = "Mackenzie Bartell",
                    Email = "Price25@yahoo.com",
                    JobTitle = "National Directives Associate",
                    Active = false,
                    PhoneNumber = "235-649-0980",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 19,
                    Name = "Mose Kohler",
                    Email = "Malika56@hotmail.com",
                    JobTitle = "Lead Implementation Executive",
                    Active = true,
                    PhoneNumber = "614-886-4868",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 20,
                    Name = "Cielo Kuphal",
                    Email = "Jude_Terry24@gmail.com",
                    JobTitle = "Dynamic Division Analyst",
                    Active = false,
                    PhoneNumber = "590-976-7492",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 21,
                    Name = "Haleigh Stokes",
                    Email = "Belle_Herman64@yahoo.com",
                    JobTitle = "Global Intranet Executive",
                    Active = false,
                    PhoneNumber = "418-255-9365",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 22,
                    Name = "Tyrese Walter",
                    Email = "Garland.Veum52@hotmail.com",
                    JobTitle = "Senior Web Liason",
                    Active = false,
                    PhoneNumber = "041-555-9831",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 23,
                    Name = "Barney Shields",
                    Email = "Anika27@gmail.com",
                    JobTitle = "District Web Administrator",
                    Active = true,
                    PhoneNumber = "379-438-0217",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 24,
                    Name = "Favian Abbott",
                    Email = "Palma_Little@hotmail.com",
                    JobTitle = "Lead Implementation Facilitator",
                    Active = false,
                    PhoneNumber = "642-808-5400",
                    Date = DateTime.Now,
                },
                new EmployeeModel()
                {
                    Id = 25,
                    Name = "Carissa Kunze",
                    Email = "Merl_Frami@yahoo.com",
                    JobTitle = "Regional Division Technician",
                    Active = true,
                    PhoneNumber = "949-983-0342",
                    Date = DateTime.Now,
                }
            };
        }

        public static List<EmployeeModel> GetMockData()
        {
            return _employeeList;
        }
    }
}
