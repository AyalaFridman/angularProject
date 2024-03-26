using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.ObjectPool;
using Models;
using services;
namespace server_myApp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ServerController : ControllerBase
{

public ServerController(){

    }
 [HttpGet]   
 public List<Volunteer> Get(){

    return ServerServices.Get();
    
 } 
[HttpGet("GetById/{id}")]
        public ActionResult<Volunteer> GetByID(int id)
        {
            var volunteer = ServerServices.GetById(id);
            if (volunteer==null)
            {
                return NotFound();
            }
            return volunteer;
        }                                                                                                                                                                                                                                                                                                                                                                  
[HttpPost]
        public List<Volunteer> Post(Volunteer v)
        {
             System.Console.WriteLine("in post");
            return ServerServices.AddVolunteer(v);
        }
[HttpPut("{id}")]
        public List<Volunteer> Put(int id, [FromBody] Volunteer updatedVolunteer)
        {
            return ServerServices.UpdateVolunteer(id,updatedVolunteer);
        }

[HttpDelete("{id}")]
         public List<Volunteer> Delete(int id)
         {
            return ServerServices.DeleteVolunteerById(id);
         }

}