#!/usr/bin/env python3
"Task 2"
import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    "will execute async_comp using asyncio.gather"
    start = time.perf_counter()
    await asyncio.gather(async_comprehension())
    return time.perf_counter() - start
