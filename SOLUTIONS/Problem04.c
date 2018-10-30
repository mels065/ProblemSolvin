#include<stdio.h>

int main() {
    int n,i=0;
    scanf("%d",&n);
    char a[]={'+','-','*','/'};
    if(n==0) {
        printf(":(");
        return 0;
    }
    else {
        while(n--){
            if(i<4) {
                printf("%c",a[i]);
                i++;
            }
            else {
                i=0;
                printf("%c",a[i]);
                i++;
            }
        }
    }
    return 0;
}