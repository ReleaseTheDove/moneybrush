import uuid

from yamo import (
    Document,
    BinaryField,
    StringField,
    BooleanField,
    DateTimeField,
    FloatField,
    IntField,
    ListField,
    DictField,
    Index,
    IDFormatter,
    EmbeddedDocument,
    EmbeddedField,
)


def next_id(*args, **kwargs):
    return uuid.uuid4().hex


class UserAgent(Document):
    """User-agent
    :param name: UA name
    :param version: UA version
    :param os: os system
    :param hardwaretype: hardware type
    :param popularity: frequency, such as Very common
    :param createat: create time(localtime)
    """
    class Meta:
        idf = IDFormatter(next_id)
        idx1 = Index('name')

    name = StringField(required=True)
    version = StringField()
    os = StringField()
    hardwaretype = StringField()
    popularity = StringField()
    createat = DateTimeField(created=True)


def connectdb():
    """Connect mongodb by the uri from config."""
    from yamo import Connection
    from config import dburi
    Connection(dburi).register_all()