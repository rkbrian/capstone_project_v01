#include <stdio.h>

int missingvalue(int *array)
{
        int hash[101];
        int i;

        memset(hash, -1, sizeof(hash));
        for (i = 0; i < 101; i++)
        {
                hash[array[i]] = array[i];
        }

        for (i = 0; i < 101; i++)
        {
                if (hash[i] != i)
                {
                        return i;
                }
        }
}


int main()
{

}