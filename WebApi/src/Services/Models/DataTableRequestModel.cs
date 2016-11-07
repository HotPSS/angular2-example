using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.Models
{
    public class DataTableRequestModel
    {
        public int _start { get; set; }

        public int _limit { get; set; }

        public string _sort { get; set; }

        public string _order { get; set; }
    }
}
