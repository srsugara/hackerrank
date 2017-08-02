import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        double med;
        List<Integer> data = new ArrayList<>();
          for (int i = 0; i < n; i++) {
            int a_i = in.nextInt();
            int pos = Collections.binarySearch(data, a_i);
            if (pos < 0) pos = Math.abs(pos)-1;
            data.add(pos, a_i);
            
            if(i%2==0){
                med=data.get(i/2);
            }else{
                med=(data.get(i/2)+data.get(i/2+1))/2.0;
            }      
            System.out.println(med);
          }   
    }
}
