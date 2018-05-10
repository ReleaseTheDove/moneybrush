


from logbook import *
from logbook.more import ColorizedStderrHandler

import colorama
colorama.init()
ColorizedStderrHandler().push_application()

logger = Logger()

debug = logger.debug
info = logger.info
trace = logger.trace
warn = logger.warn
error = logger.error

# debug('asdfa')
# info('asfasdfsad')
# trace('1212')
# warn('abc')
# error('sadfas')