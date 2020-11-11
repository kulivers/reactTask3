using System;
using System.Collections.Generic;
using reactTask_3.Controllers;

namespace userWebApi.Model
{
    public class laba1
    {
        static double sumArifmeticProgression(int a1, int d, int n)
        {
            double sum = (2 * a1 + d * (n - 1)) * n / 2;
            return sum;
        }


        static bool isTriangle(int a, int b, int c)
        {
            if ((a + b > c) && (a + c > b) && (b + c > a))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        static double TriangleSquare(int a, int b, int c)
        {
            if (isTriangle(a, b, c) == false)
            {
                Console.WriteLine("its not triangle!");
                return 0;
            }
            else
            {
                int p = (a + b + c) / 2;
                return Math.Sqrt(p * (p - a) * (p - b) * (p - c));

            }
        }

        //Найти все двузначные числа, сумма квадратов цифр которых кратна M 
        static List<int> arrOfSpecials(int m)
        {
            int sum, a, b, c;
            List<int> arr = new List<int>();
            for (int i = 10; i < 99; i++)
            {
                a = i / 10;
                b = i % 10;
                sum = a + b;
                if (sum % m == 0)
                {
                    Console.WriteLine(i);
                    arr.Add(i);
                }
            }

            return arr;
        }
    }
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
