import os
import sys
import inspect

import logbook
from logbook import Logger,TimedRotatingFileHandler
from logbook.more import ColorizedStderrHandler


def log_type(record,handler):
    log = "[{date}] [{level}] [{filename}] [{func_name}] [{lineno}] {msg}".format(
        date = record.time,
        level = record.level_name,
        filename = os.path.split(record.filename)[-1],
        func_name = record.func_name,
        lineno = record.lineno,
        msg = record.message
    )
    return log


LOG_DIR = os.path.join("Log")
if not os.path.exists(LOG_DIR):
    os.makedirs(LOG_DIR)

log_std = ColorizedStderrHandler()
log_std.formatter = log_type

log_file = TimedRotatingFileHandler(
    os.path.join(LOG_DIR, '%s.log' % 'log'), date_format='%Y-%m-%d', bubble=True, encoding='utf-8')
log_file.formatter = log_type


def init_logger(outputfile=False):
    """ 默认不开启日志写入文件 """
    filename = inspect.getframeinfo(inspect.currentframe().f_back).filename
    logger = Logger(filename)
    logbook.set_datetime_format("local")
    logger.handlers = []
    if outputfile:
        logger.handlers.append(log_file)
    logger.handlers.append(log_std)
    return logger

logger = init_logger()