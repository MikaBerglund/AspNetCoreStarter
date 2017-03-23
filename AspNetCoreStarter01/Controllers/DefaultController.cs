using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreStarter01.Controllers
{
    [Route("")]
    public class DefaultController : Controller
    {
        [Route("")]
        public IActionResult Default()
        {
            return View();
        }
    }
}