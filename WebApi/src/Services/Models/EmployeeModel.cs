﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.Models
{
    public class EmployeeModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string JobTitle { get; set; }

        public Boolean Active { get; set; }

        public string PhoneNumber { get; set; }

        public DateTime Date { get; set; }
    }
}
