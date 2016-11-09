using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Services.Services;
using Services.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        private EmployeeService _service = new EmployeeService();

        // GET: api/values
        [HttpGet]
        public IEnumerable<EmployeeModel> Get()
        {
            return _service.Get();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public EmployeeModel Get(int id)
        {
            return _service.Get(id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] EmployeeModel model)
        {
            _service.Create(model);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] EmployeeModel model)
        {
            model.Id = id;
            _service.Edit(model);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _service.Delete(id);
        }
    }
}
