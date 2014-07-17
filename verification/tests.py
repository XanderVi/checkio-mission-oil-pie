"""
TESTS is a dict with all you tests.
Keys for this will be categories' names.
Each test is dict with
    "input" -- input data for user function
    "answer" -- your right answer
    "explanation" -- not necessary key, it's using for additional info in animation.
"""

TESTS = {
    "Basics": [
        {
            "input": (2, -1, 3),
            "answer": [1, 18],
            "show": "(2, -1, 3)",
            "explanation": [[1, 1], [2, 3], [5, 9], [1, 18]]
        },
        {
            "input": (1, 2, 3),
            "answer": [0, 1],
            "show": "(1, 2, 3)",
            "explanation": [[1, 1], [5, 6], [1, 2], [0, 1]]
        },
        {
            "input": (-1, -1, -1),
            "answer": [8, 27],
            "show": "(-1, -1, -1)",
            "explanation": [[1, 1], [2, 3], [4, 9], [8, 27]]
        },
        {
            "input": (10,),
            "answer": [0, 1],
            "show": "(10,)",
            "explanation": [[1, 1], [0, 1]]
        },
    ],
    "Extra": [
        {
            "input": [6, 3],
            "answer": 9,
            "explanation": "6+3=?"
        },
        {
            "input": [6, 7],
            "answer": 13,
            "explanation": "6+7=?"
        }
    ]
}
