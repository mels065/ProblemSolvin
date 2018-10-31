import java.util.*;
public class Problem03
{
   public static void main(String[] args)
   {
      Scanner input = new Scanner(System.in);
      System.out.println("Input?");
      String data = input.nextLine();
      data = data.toLowerCase();
      ArrayList<String> a = new ArrayList();
      ArrayList<Integer> b = new ArrayList();
      for(int x=0; x<data.length(); x++) {
         if(a.contains(data.substring(x,x+1)))
            b.set(a.indexOf(data.substring(x,x+1)),b.get(a.indexOf(data.substring(x,x+1)))+1);
         else {
            a.add(data.substring(x,x+1));
            b.add(1);
         }
      }
      String alphabet="abcdefghijklmnopqrstuvwxyz";
      int tally=0;
      System.out.println("{");
      for(int x=0; x<a.size(); x++) {
         if(alphabet.indexOf(a.get(x))!=-1) {
            System.out.print("\t");
            System.out.print(a.get(x)+": "+b.get(x)+",");
            System.out.println("");
         }
         else 
            tally+=b.get(x);
      }
      System.out.print("\t");
      System.out.println("etc. "+tally);
      System.out.println("}");
   }
}
