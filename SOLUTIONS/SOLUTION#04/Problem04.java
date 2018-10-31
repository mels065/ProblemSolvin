public class Problem04{
    public static void main(String args[]){
        if (args.length > 0){
            int input = Integer.parseInt(args[0]);
            for (int i = 0; i < input; i++){
                switch(i%4){
                    case 0: System.out.print("+");
                    break;
                    case 1: System.out.print("-");
                    break;
                    case 2: System.out.print("*");
                    break;
                    case 3: System.out.print("/");
                    break;
                }
            }
        }
    }
}