using Services.MockData;
using Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.Services
{
    public class EmployeeService
    {
        public EmployeeModel[] Get()
        {
            return MockedEmployee.GetMockData().ToArray();
        }

        public EmployeeModel Get(int id)
        {
            return MockedEmployee.GetMockData()
                .FirstOrDefault(c => c.Id == id);
        }

        public void Create(EmployeeModel model)
        {
            var customer = MockedEmployee.GetMockData()
                .OrderBy(c => c.Id)
                .LastOrDefault();

            model.Id = customer.Id + 1;

            MockedEmployee.GetMockData().Add(model);
        }

        public void Edit(EmployeeModel model)
        {
            var query = MockedEmployee.GetMockData().FirstOrDefault(c => c.Id == model.Id);

            query = model;
        }

        public void Delete(int id)
        {
            var query = MockedEmployee.GetMockData().FirstOrDefault(c => c.Id == id);

            MockedEmployee.GetMockData().Remove(query);
        }
    }
}
