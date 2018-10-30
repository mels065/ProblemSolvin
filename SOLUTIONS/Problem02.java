import java.util.Arrays;
import java.util.Scanner;

public class Problem02 {
    public static void main(String[] args) {
        char[] leftHandChar = {'q','w','e','r','t','a','s','d','f','g','z','x','c','v','b'};
        char[] rightHandChar = {'y','u','i','o','p','h','j','k','l','n','m'};
        Scanner scanner = new Scanner(System.in);

        char[] keyword = scanner.nextLine().toLowerCase().toCharArray();
        boolean isContainsRHChar = false;
        boolean isContainsLHChar = false;
        for (char character : keyword) {
            if (Arrays.asList(rightHandChar).contains(character)) {
                isContainsRHChar = true;
            }
            if (Arrays.asList(leftHandChar).contains(character)) {
                isContainsLHChar = true;
            }
        }
        if (isContainsRHChar && isContainsLHChar) {
            System.out.println("true");
        } else {
            System.out.println("false");
        }
    }
}