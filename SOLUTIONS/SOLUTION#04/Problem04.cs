using System;

namespace Problem04
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.Write("Enter an integer: ");
            int input = int.Parse(Console.ReadLine());

            if (input >= 4)
            {
                // determining the times all 4 operations are printed
                Repeat(input / 4);
            }
            
            if (input > 0 && (input % 4) != 0)
            {
                // determine the level of operations to be printed at the end
                Print(input % 4);
            }
            else if (input == 0)
            {
                Console.Write(":(");
            }

            Console.ReadLine();
        }

        static void Print(int n)
        {
            switch (n)
                {
                    case 1:
                        Console.Write("+");
                        break;
                    case 2:
                        Console.Write("+-");
                        break;
                    case 3:
                        Console.Write("+-*");
                        break;
                }
        }

        static void Repeat(int n)
        {
            for (int i = 0; i < n; i++)
            {
                Console.Write("+-*/");
            }
        }
    }
}
