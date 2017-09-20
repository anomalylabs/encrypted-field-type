## Introduction[](#introduction)

`anomaly.field_type.encrypted`

The encrypted field type provides a password input that stores the value as an encrypted string.


### Configuration[](#introduction/configuration)

Below is the full configuration available with defaults values:

    "example" => [
        "type"   => "anomaly.field_type.encrypted",
        "config" => [
            "default_value" => null,
            "show_text"    => false,
            "auto_decrypt" => false
        ]
    ]

###### Configuration

<table class="table table-bordered table-striped">

<thead>

<tr>

<th>Key</th>

<th>Example</th>

<th>Description</th>

</tr>

</thead>

<tbody>

<tr>

<td>

default_value

</td>

<td>

Secret Password

</td>

<td>

The defualt value.

</td>

</tr>

<tr>

<td>

show_text

</td>

<td>

`true`

</td>

<td>

Display plain text by default when typing in the input.

</td>

</tr>

<tr>

<td>

auto_decrypt

</td>

<td>

`true`

</td>

<td>

Define whether the value is automatically decrypted when accessed or not.

</td>

</tr>

</tbody>

</table>
