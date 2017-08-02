import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int s = in.nextInt();
        int z=0;
        for(int a0 = 0; a0 < s; a0++){
            int n = in.nextInt();      
            int[] x = new int[n];
            if(n==1){
                z=1;
            }
            else if(n==2){
                z=2;
            }
            else if(n==3){
                z=4;
            }
            else{
                x[0]=1;
                x[1]=2;
                x[2]=4;
                for(int i=3;i<n;i++){
                    x[i]=x[i-1]+x[i-2]+x[i-3];
                    z=x[i];
                }
            }
            System.out.println(z);
        }
    }
}
