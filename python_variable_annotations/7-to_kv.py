#!/usr/bin/env python3
"function"
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """returns them into a tuple"""
    return k, v**2
