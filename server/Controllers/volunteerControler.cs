using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.ObjectPool;
using Models;
using services;
namespace server_myApp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VolunteerControler : ControllerBase
{

public VolunteerControler(){

    }
 [HttpGet]   
 public List<Volunteer> Get(){

    return VolunteerServices.Get();
    
 } 
[HttpGet("GetByID/{id}")]
        public Volunteer GetByDay(int id)
        {
             return VolunteerServices.GetById(id);
        }                                                                                                                                                                                                                                                                                                                                                                  
[HttpPost]
        public List<Volunteer> Post(Volunteer v)
        {
             System.Console.WriteLine("in post");
            return VolunteerServices.AddVolunteer(v);
        }
[HttpPut("{id}")]
        public List<Volunteer> Put(int id, [FromBody] Volunteer updatedVolunteer)
        {
            return VolunteerServices.UpdateVolunteer(id,updatedVolunteer);
        }

[HttpDelete("{id}")]
         public List<Volunteer> Delete(int id)
         {
            return VolunteerServices.DeleteVolunteerById(id);
         }

}