using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace reactTask_3.Controllers
{
    public class Range
    {
        public int Start { get; set; }
        public int End { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class ArrayCalculatorController : ControllerBase
    {
        [HttpPost]
        [Route("Square")]
        public IActionResult Square(Range range)
        {
            List<int> ls = new List<int>(Enumerable.Range(range.Start, range.End));
            List<string> strs = new List<string>();
            for (int i = 0; i < ls.Count; i++)
            {
                ls[i] = ls[i] * ls[i];
                strs.Add(i.ToString() +"-й элемент массива равен: " + ls[i].ToString());
            }
            return Ok(strs);
        }

        [HttpPost]
        [Route("Double")]
        public IActionResult Double(Range range)
        {
            List<string> strs = new List<string>();

            List<int> ls = new List<int>(Enumerable.Range(range.Start, range.End));
            for (int i = 0; i < ls.Count; i++)
            {
                ls[i] = ls[i] * 2;
                strs.Add(i.ToString() + "-й элемент массива равен: " + ls[i].ToString());

            }
            return Ok(strs);
        }
    }
}
