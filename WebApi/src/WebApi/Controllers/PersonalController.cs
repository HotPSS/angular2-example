using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Services.Services;
using Services.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    public class PersonalController : Controller
    {
        private PersonalService _service = new PersonalService();
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("{_start}/{_limit}/{_sort}/{_order}")]
        public IEnumerable<PersonalModel> Get(DataTableRequestModel dataTableModel)
        {
            return _service.Get(dataTableModel);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
