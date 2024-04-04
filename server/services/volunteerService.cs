using Models;
namespace services
{
    public class VolunteerServices
    {
        static List<Volunteer>? VolunteerList{get; set;}
        static List<Volunteer>? VolunteerListByDay{get; set;}
        static VolunteerServices()
        {
            VolunteerList = new List<Volunteer>()
            {
            new Volunteer() { id = 1, firstName = "sara", lastName= "levi", phone= "0556705897", address= "rashbi 4" ,days=new bool[6]{false,true,true,true,true,true}},
            new Volunteer() { id = 2, firstName = "rachel", lastName = "glik", phone = "0527632016", address = "hritba 25",days=new bool[6]{false,true,false,false,false,false}},
            new Volunteer() { id=  3, firstName = "rivka", lastName= "zer", phone= "0504189635", address= "jafo 2",days=new bool[6]{true,true,true,true,true,true}}
            };
            VolunteerListByDay=new List<Volunteer>(){};
        }
        public static List<Volunteer>? Get(){
            return VolunteerList;
        }

        public static Volunteer? GetById(int id)
        {
            foreach (var volunteer in VolunteerList)
            {
                if (volunteer.id == id)
                {
                    return volunteer;
                }
            }
            return null;
        }
        public static List<Volunteer> AddVolunteer(Volunteer s)
        {
            s.id= VolunteerList.Last().id+1;
            VolunteerList.Add(s);

            return VolunteerList;
        }
        public static List<Volunteer> UpdateVolunteer(int id, Volunteer updataVolunteer)
        {
            var volunteerToUpdate = GetById(id);
            if (volunteerToUpdate!=null) {
                 VolunteerList[id-1] = updataVolunteer;
             }
 
             return VolunteerList;
        }
        // public static List<Volunteer>? GetByDay(int day){
        //     VolunteerListByDay=new List<Volunteer>(){};
        //     foreach (var item in VolunteerList)
        //     {
        //         if(item.days[day]==true){
        //             VolunteerListByDay.Add(item);
        //             System.Console.WriteLine(VolunteerListByDay);  
        //         }
        //     }

        //     System.Console.WriteLine(VolunteerListByDay.Count);
        //     return VolunteerListByDay;
        // }
        public static List<Volunteer> DeleteVolunteerById(int id)
        {
            foreach (var volunteer in VolunteerList)
            {
                if (volunteer.id == id)
                {
                    VolunteerList.Remove(volunteer) ;
                    System.Console.WriteLine("after remove");  
                    System.Console.WriteLine(VolunteerList.Count);
                    return VolunteerList;          
                }
            }
             return VolunteerList;
        }
    }
}