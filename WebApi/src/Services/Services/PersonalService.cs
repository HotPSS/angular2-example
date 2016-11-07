using Services.MockData;
using Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services.Services
{
    public class PersonalService
    {
        public PersonalModel[] Get(DataTableRequestModel dataTableModel)
        {
            var query = MockedPersonal.GetMockData();

            switch (dataTableModel._order)
            {
                default:
                case "Name":
                    if (dataTableModel._sort == "ASC")
                        query = query.OrderBy(p => p.Name).ToArray();
                    else query = query.OrderByDescending(p => p.Name).ToArray();
                    break;
            }

            query = query.Skip(dataTableModel._start).Take(dataTableModel._limit).ToArray();

            return query;
        }
    }
}
