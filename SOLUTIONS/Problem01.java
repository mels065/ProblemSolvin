import java.util.Scanner;

public class Problem01 {
    public static void main(String[] args) {
        String[] names = {"Bhin Bhin", "Atung", "Kaka", "Hodori", "Pan Pan", "Appu", "Lulu", "Orry", "Mei Mei"};
        Scanner scanner = new Scanner(System.in);
        try {
            int index = Integer.parseInt(scanner.nextLine());
            if (index > 9) {
                if (index % 9 == 0) {
                    index = 9;
                } else {
                    index = index % 9;
                }
            }
            index -= 1;
            System.out.println(names[index]);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}