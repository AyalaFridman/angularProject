using Models;
namespace services
{
    public class SchedulingServices
    {
        static List<Scheduling>? SchedulingList{get; set;}
        static List<int>? SchedulingList1{get; set;}
        static SchedulingServices()
        {
            SchedulingList = new List<Scheduling>()
            {
            new Scheduling() { id = 5 },
            new Scheduling() { id = 5},
            new Scheduling() { id= 5},
             new Scheduling() { id =5 },
            new Scheduling() { id = 5},
            new Scheduling() { id=  5},
            new Scheduling() { id=  5}  
            };
            SchedulingList1 = new List<int>(){2,2,1,1,1,1,3};
        }
        public static List<int>? Get(){
            return SchedulingList1;
        }

        

        // public static List<Scheduling> AddScheduling(Scheduling s)
        // {
        //     s.id= SchedulingList.Last().id+1;
        //     SchedulingList.Add(s);
        //     return SchedulingList;
        // }
        public static List<int> UpdateScheduling(int id, int updataScheduling)
        {
            // System.Console.WriteLine("in up update"); 
            // var SchedulingToUpdate = GetById(id);

            // if (SchedulingToUpdate!=null) {
                 SchedulingList1[id-1] = updataScheduling;
                 System.Console.WriteLine("in update"); 
            //  }
             return SchedulingList1;
        }
        // public static List<Scheduling> DeleteSchedulingById(int id)
        // {
        //     foreach (var scheduling in SchedulingList)
        //     {
        //         if (scheduling.id == id)
        //         {
        //             SchedulingList.Remove(scheduling) ;
        //             System.Console.WriteLine("after remove");  
        //             System.Console.WriteLine(SchedulingList.Count);
        //             return SchedulingList;          
        //         }
        //     }
        //      return SchedulingList;
        // }
    }
}