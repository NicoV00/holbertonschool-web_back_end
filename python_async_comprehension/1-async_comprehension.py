#!/usr/bin/env python3
"task 1"
from typing import Generator, List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    "this coroutine will collect 10 random numbers"
    list_of_yields = [i async for i in async_generator()]
    return list_of_yields
