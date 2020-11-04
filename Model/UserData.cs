using System.Collections.Generic;
using reactTask_3.Controllers;

namespace userWebApi.Model
{
    public class UserData
    {
        public int startOtr { get; set; }
        public int endOtr { get; set; }
        public bool IsSquare { get; set; }

        public RegistrationMessage GetRegisteredMessage()
        {
            var sexData = IsSquare ? "квадрад" : "не кодред";
            var start = startOtr.ToString();
            var end = endOtr.ToString();
            
            var messages = new List<string>()
            {
                
                $"{sexData}",
                //$"{start}",
                //$"{end}"
            };

            return
                new RegistrationMessage
                {
                    Messages = messages
                };
        }

        

    }
}
