#!/usr/bin/env python3
" coroutines"
from typing import List
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """return it."""
    list_of_secs = []
    for _ in range(n):
        result = await (wait_random(max_delay))
        list_of_secs.append(result)
    return sorted(list_of_secs)
