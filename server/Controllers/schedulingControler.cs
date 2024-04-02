using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.ObjectPool;
using Models;
using services;
namespace server_myApp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SchedulingControler : ControllerBase
{

public SchedulingControler(){

    }
 [HttpGet]   
 public List<int> Get(){

    return SchedulingServices.Get();
    
 } 
                                                                                                                                                                                                                                                                                                                                                             
// [HttpPost]
//         public List<Scheduling> Post(Scheduling s)
//         {
//              System.Console.WriteLine("in post");
//             return SchedulingServices.AddScheduling(s);
//         }
[HttpPut("{id}")]
        public List<int> Put(int id, [FromBody] int updatedScheduling)
        {
             System.Console.WriteLine("in put");

            return SchedulingServices.UpdateScheduling(id,updatedScheduling);
        }

// [HttpDelete("{id}")]
//          public List<Scheduling> Delete(int id)
//          {
//             return SchedulingServices.DeleteSchedulingById(id);
//          }

}