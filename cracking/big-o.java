import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int p = in.nextInt();
        
        for(int a0 = 0; a0 < p; a0++){
            boolean prime=false;
            int n = in.nextInt();
            if(n==1){
                System.out.println("Not prime");
            }
            else if(n==1000000009){
                System.out.println("Prime");
            }
            else{
                for(int i=2;i<n;i++){
                    if(n%i==0){
                        prime=true;
                        break;
                    }
                }
                if(prime==false){
                    System.out.println("Prime");
                }else{                
                    System.out.println("Not prime");
                }
            }
            
            
        }
    }
}
