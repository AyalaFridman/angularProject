using Models;
namespace services
{
    public class SchedulingServices
    {
        public static int[]? SchedulingList{get; set;}
         static SchedulingServices()
        {
            SchedulingList=new int[6]{0,0,0,0,0,0};
        }
        public static int[]? Get(){
            return SchedulingList;
        }


        public static int[] AddScheduling(int[] updataScheduling)
        {
              SchedulingList=updataScheduling;
              return SchedulingList;
        }
        // public static List<int> UpdateScheduling(int id, int updataScheduling)
        // {
        //     // System.Console.WriteLine("in up update"); 
        //     // var SchedulingToUpdate = GetById(id);

        //     // if (SchedulingToUpdate!=null) {
        //          SchedulingList[id-1] = updataScheduling;
        //          System.Console.WriteLine("in update"); 
        //     //  }
        //      return SchedulingList;
        // }
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