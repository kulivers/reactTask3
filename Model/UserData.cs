using System.Collections.Generic;
using reactTask_3.Controllers;

namespace userWebApi.Model
{
    public class UserData
    {
        public string Name { get; set; }
        public bool IsMale { get; set; }
        public string Education { get; set; }
        public bool HasCar { get; set; }

        public RegistrationMessage GetRegisteredMessage()
        {
            var sexData = IsMale ? "Мужской" : "Женский";

            var messages = new List<string>()
            {
                $"{Name}, вы успешно зарегестрированы.",
                "Вы указали следующие данные:",
                $"Образование: {MakeEducationString(Education)}", 
                $"Пол: {sexData}",
                HasCar ? "Согласны с правилами сайта" : "Не согласны с правилами сайта"
            };

            return
                new RegistrationMessage
                {
                    Messages = messages
                };
        }

        private static string MakeEducationString(string education)
        {
            switch (education)
            {
                case "High":
                    return "Высшее";
                case "Partly":
                    return "Незаконченное высшее";
                case "Middle":
                    return "Среднее";
                default:
                    return "Загадочное";
            }
        }
    }
}
