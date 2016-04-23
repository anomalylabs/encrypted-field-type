# Configuration

- [Basic Configuration](#basic)
- [Extra Configuration](#extra)

<hr>

Below is the full configuration available with defaults.

{% code php %}
protected $fields = [
    "example" => [
        "type"   => "anomaly.field_type.country",
        "config" => [
            "default_value" => null,
            "show_text"    => false,
            "auto_decrypt" => false
        ]
    ]
];
{% endcode %}

<hr>

<a name="basic"></a>
## Basic Configuration

### Default Value

    {{ code('php', '"default_type" => "<h1>Hello World</h1>"') }}

The `default_value` is a core option. This field type accepts any string value.

<a name="extra"></a>
## Extra Configuration

### Show Typing

{{ code('php', '"show_typing" => true') }}

Specify if you want the plain text to show by default when typing in the input.

### Automatically Decrypt Values

{{ code('php', '"auto_decrypt" => true') }}

When the value is accessed on the entry via the encrypted field type accessor, this configuration defines whether that value is automatically decrypted (encrypt storage only) or must be decrypted manually.
