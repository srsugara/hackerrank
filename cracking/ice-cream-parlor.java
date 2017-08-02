import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;


public class Solution {
   
    public static void main(String[] args) {
        
        int t;
        int n, m;
        Scanner in = new Scanner(System.in);
        t = in.nextInt();
       for(int test = 0; test < t; test++) {       
            
            m = in.nextInt();
            n = in.nextInt();
            int[] a=new int[n];
    
            for (int i = 0; i < n; i++)
                a[i] = in.nextInt();
            
            int index1=0,index2=0;
            for(int i=0;i<n-1;i++)
            {
                for(int j=i+1;j<n;j++)
                {
                    if(a[i]+a[j]==m)
                    {
                        index1=i+1;
                        index2=j+1;
                        j=n;
                        i=n;
                    }
                }
            }
            System.out.println(index1+" "+index2);           
        }
        
    }
                        
}