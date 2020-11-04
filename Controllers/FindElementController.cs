using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace reactTask_3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FindElementController : ControllerBase
    {
        public class Arr
        {
            //public int First { get; set ; }
            //public int Second { get; set; }
            //public int Third { get; set; }
            //public int Search { get; set; }

            public int firstEl { get; set; }
            public int secondEl { get; set; }
            public int thirdEl { get; set; }
            public int searchEl { get; set; }
        }

        [HttpPost]
        [Route("Search")]
        public IActionResult Search(Arr arr)
        {
            var ls = new List<int> {arr.firstEl, arr.secondEl, arr.thirdEl};

            var isExist = ls.Contains(arr.searchEl);
            var returnList = new List<string>();

            if (isExist)
            {
                returnList.Add("array has that element");
                return Ok(returnList);
            }

            returnList.Add("array hasn't that element");
            return Ok(returnList);
        }

    }
}
