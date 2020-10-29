using System.Collections.Generic;
using reactTask_3.Controllers;

namespace userWebApi.Model
{
    public class UserData
    {
        public int Start { get; set; }
        public int End { get; set; }
        public bool IsSquare { get; set; }

        public RegistrationMessage GetRegisteredMessage()
        {
            var sexData = IsSquare ? "Мужской" : "Женский";

            var messages = new List<string>()
            {
                $"{IsSquare}, вы успешно зарегестрированы.",
                "Вы указали следующие данные:",
                $"Образование:",
                $"Пол: {sexData}",
                IsSquare ? "Согласны с правилами сайта" : "Не согласны с правилами сайта"
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
