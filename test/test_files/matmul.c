// function to multiply two matrices
void multiplyMatrices(int first[3][2],
                      int second[2][3],
                      int result[3][3],
                      int r1, int c1, int r2, int c2)
{

    // Initializing elements of matrix mult to 0.
    for (int i = 0; i < r1; i += 1)
    {
        for (int j = 0; j < c2; j += 1)
        {
            result[i][j] = 0;
        }
    }

    // Multiplying first and second matrices and storing it in result
    for (int i = 0; i < r1; i += 1)
    {
        for (int j = 0; j < c2; j += 1)
        {
            for (int k = 0; k < c1; k += 1)
            {
                result[i][j] += first[i][k] * second[k][j];
            }
        }
    }
    return;
}

int first[3][2], second[2][3], result[3][3];
int r1 = 3, c1 = 2, r2 = 2, c2 = 3;
for (int i = 0; i < 2; i += 1)
{
    for (int j = 0; j < 3; j += 1) {
        first[j][i] = i * j;
        second[i][j] = i * j;
    }
}

// multiply two matrices.
multiplyMatrices(first, second, result, r1, c1, r2, c2);
int a = result[2][2];

