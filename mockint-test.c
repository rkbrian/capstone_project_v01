#include <stdio.h>
#include <limits.h>

int main()
{
        int local_sum_memo = 0, max_so_far = INT_MIN, size = 0;
        int arr[] = {-2, -3, -400, -1, -2, -1, -5, -3};

        size = sizeof(arr) / sizeof(arr[0]);
        for (int i = 0; i < size; i++)
        {
                // include current element to previous subarray only
                // when it can add to a bigger number than itself.
                if (arr[i] <= local_sum_memo + arr[i])
                {
                        local_sum_memo += arr[i];
                }
                // Else start the max subarray from current element
                else
                {
                        local_sum_memo = arr[i];
                }
                if (local_sum_memo > max_so_far)
                        max_so_far = local_sum_memo;
        }
        printf("Maximum contiguous sum is %d\n", max_so_far);
        return (0);
}