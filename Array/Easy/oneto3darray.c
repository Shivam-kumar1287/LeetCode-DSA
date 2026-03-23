#include <stdio.h>
#include <stdlib.h>

int main() {

    int i,j,k;
    int m,n,p;

    /* ---------- 1D Array ---------- */
    printf("Enter size for 1D array (m): ");
    scanf("%d",&m);

    int *arr1 = (int*)malloc(m*sizeof(int));

    printf("Enter elements:\n");
    for(i=0;i<m;i++)
        scanf("%d",&arr1[i]);

    printf("1D Array:\n");
    for(i=0;i<m;i++)
        printf("%d ",arr1[i]);

    printf("\n\n");


    /* ---------- 2D Array ---------- */
    printf("Enter rows and columns for 2D array (m n): ");
    scanf("%d %d",&m,&n);

    int **arr2 = (int**)malloc(m*sizeof(int*));

    for(i=0;i<m;i++)
        arr2[i] = (int*)malloc(n*sizeof(int));

    printf("Enter elements:\n");
    for(i=0;i<m;i++)
        for(j=0;j<n;j++)
            scanf("%d",&arr2[i][j]);

    printf("2D Array:\n");
    for(i=0;i<m;i++){
        for(j=0;j<n;j++)
            printf("%d ",arr2[i][j]);
        printf("\n");
    }

    printf("\n");


    /* ---------- 3D Array ---------- */
    printf("Enter dimensions for 3D array (m n p): ");
    scanf("%d %d %d",&m,&n,&p);

    int ***arr3 = (int***)malloc(m*sizeof(int**));

    for(i=0;i<m;i++){
        arr3[i] = (int**)malloc(n*sizeof(int*));
        for(j=0;j<n;j++)
            arr3[i][j] = (int*)malloc(p*sizeof(int));
    }

    printf("Enter elements:\n");
    for(i=0;i<m;i++)
        for(j=0;j<n;j++)
            for(k=0;k<p;k++)
                scanf("%d",&arr3[i][j][k]);

    printf("3D Array:\n");
    for(i=0;i<m;i++)
        for(j=0;j<n;j++)
            for(k=0;k<p;k++)
                printf("%d ",arr3[i][j][k]);

    return 0;
}