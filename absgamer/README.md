## Init database

> Generate `alembic`

```bash
cd /path/to/absgamer
alembic init alembic
```

> Config *alembic.ini*, setting up the SQLAlchemy URL:

**If config for remote uri, then the remote database would be upgrade**

```python
sqlalchemy.url = mysql+pymysql://root:root@localhost/absgamer?charset=utf8
```

## Update database

> Create a Migration Script

Run command:

```bash
alembic revision -m "init tables"
```
A new file like `1975ea83b712_create_account_table.py` will be generated at directory *alembic/versions*.

You can add some directives to your script by implement function `upgrade` and `downgrade`.

An overview of all Alembic directives is at [Operation Reference](http://alembic.zzzcomputing.com/en/latest/ops.html#ops).


> Run Migration

You can specify `1975ea83b712` as the revision we'd like to upgrade to.

Also its's easier in most cases just to tell it "the most recent" by `head`:

```bash
alembic upgrade head
```

Repeat the two steps, you can complete the migration.

> Partial Revision Identifiers

```bash
alembic upgrade 1975ea83b712
```

> Relative Migration Identifiers

```bash
alembic upgrade +2

alembic downgrade -1

alembic upgrade 1975ea83b712+2
```

> Getting Infomation

View the current revision:

```bash
alembic current
```

### Auto generate script for upgrading

Edit the file *env.py*, config the variable `target_metadata`, like:
```python
import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(__file__)) + '/../../')
from absgamer.models import Base
target_metadata = Base.metadata
```

We can get the migration-script by running command:
```bash
alembic revision --autogenerate -m "Auto generate tables"
```

## [Document for more detail](http://alembic.zzzcomputing.com/en/latest/tutorial.html)